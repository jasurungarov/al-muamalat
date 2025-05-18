'use client';

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import Profile from '@/app/(root)/_components/Profile';
import Courses from '@/app/(root)/_components/Courses';

export default function Page() {
  const [activeTab, setActiveTab] = useState<'profile' | 'courses' | null>('profile');

  return (
    <div className="container mx-auto max-w-6xl py-24 mt-15 gap-15 justify-center w-full grid grid-cols-1">
      <div className="space-x-4">
        <Button
          onClick={() => setActiveTab('profile')}
          size="lg"
          variant={activeTab === 'profile' ? 'default' : 'outline'}
          className="text-1xl"
        >
          Profile
        </Button>

        <Button
          onClick={() => setActiveTab('courses')}
          size="lg"
          variant={activeTab === 'courses' ? 'default' : 'outline'}
          className="text-1xl"
        >
          Courses
        </Button>

        {/* Shartli ko‘rsatish */}
        <div className="mt-6">
          {activeTab === 'profile' && <Profile />}
          {activeTab === 'courses' && <Courses />}
        </div>
      </div>
    </div>
  );
}
