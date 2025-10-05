'use client'

import React, { useState } from 'react'
import Column from './Column';
import { DEFAULT_CARDS } from '@/data';
import BurnBarrel from './BurnBarrel';
import { BiAngry, BiHappy, BiSad } from 'react-icons/bi';

const Board = () => {

  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll scrollbar p-12">
      <Column
        title="Draft"
        column="draft"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Happy"
        column="happy"
        headingColor="text-yellow-200"
        Icon={BiHappy}
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Calm"
        column="calm"
        headingColor="text-blue-200"
        Icon={BiHappy}
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Sad"
        column="sad"
        headingColor="text-emerald-200"
        Icon={BiSad}
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Angry"
        column="angry"
        headingColor="text-red-200"
        Icon={BiAngry}
        cards={cards}
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />      
    </div>
  )
}

export default Board