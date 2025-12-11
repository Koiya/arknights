'use client';
import {useState, useEffect} from 'react';
import fetchData from '../services/FetchData';
import {Operator, OperatorData} from '../types/operator';
import OperatorPanel from './OperatorPanel';


export default function OperatorList(){
    const [operators, setOperators] = useState<OperatorData>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadOperators = async() => {
            try {
                setLoading(true);
                const data = await fetchData<OperatorData>('http://localhost:8080/character');
                setOperators(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load characters');
            } finally {
                setLoading(false);
            }
        }
        loadOperators();
    }, []);
    //Skeleton shadcn?
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
        <div className="mb-4 min-h-screen mx-auto p-4">
            {Object.entries(operators).map(([id, operator]) => (
                <OperatorPanel
                key={id}
                id={id}
                operator={operator}
                />
            ))}
        </div>
    );
}