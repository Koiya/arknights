'use client';
import {useState, useEffect} from 'react';
import fetchData from '../services/FetchData';
import {Operator, OperatorData} from '../types/operator';
import OperatorPanel from './OperatorPanel';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import OperatorFilter from './OperatorFilter';


export default function OperatorList(){
    const [operators, setOperators] = useState<OperatorData>({});
    // const [searchResults, setSearchResults] = useState<OperatorData>({});
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const ITEMS_PER_PAGE = 4;
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        const loadOperators = async() => {
            try {
                setLoading(true);
                const data = await fetchData<OperatorData>('http://localhost:8080/character');
                // console.log(data);
                setOperators(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load characters');
            } finally {
                setLoading(false);
            }
        }
        loadOperators();
    }, []);

    const filteredOperators: [string, Operator][] = Object.entries(operators).filter(
        ([id, operator]: [string, Operator]) =>
        operator.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
        
    // Calculate pagination
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems: [string, Operator][] = filteredOperators.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredOperators.length / ITEMS_PER_PAGE);

    // Change page
    const goToPage = (pageNumber:any) => {
        setCurrentPage(pageNumber);
    };

    const goToPrevious = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const goToNext = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    //Skeleton shadcn?
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
        <div className="mb-4 min-h-screen mx-auto p-4">
            <OperatorFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} setPage={setCurrentPage}/>
            {currentItems.map(([id, operator]) => (
                <OperatorPanel
                key={id}
                id={id}
                operator={operator}
                />
            ))}

            <Pagination className="text-white">
                <PaginationContent>
                    <PaginationItem>
                    <PaginationPrevious onClick={goToPrevious} />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#">{currentPage}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationNext onClick={goToNext}/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}