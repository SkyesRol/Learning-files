"use client";

import React from 'react';
import { ReactFlow, Background } from 'reactflow';
import 'reactflow/dist/style.css';

export default function App() {
  const nodes = [
    {
      id: '1',
      position: {
        x: 100,
        y: 100
      },
      data: {
        label: '开始结点'
      }
    },
    {
      id: '2',
      position: {
        x: 300,
        y: 100
      },
      data: {
        label: '结束结点'
      }
    }
  ];
  const edges = [
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      type: 'smoothstep',
      data: {
        label: '边'
      }
    }
  ];
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={nodes} edges={edges} >
        <Background />
      </ReactFlow>
    </div>
  )
}
