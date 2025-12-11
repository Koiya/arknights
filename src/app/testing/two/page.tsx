'use client';
import React, { useState, useMemo } from 'react';
import { Noto_Sans } from 'next/font/google'
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, Search } from 'lucide-react';

const notoSans = Noto_Sans({
  subsets: ['latin'],
})

export default function Testing() {
    return(
          <div className="font-sans min-h-screen bg-neutral-900">
          </div>
    );
}