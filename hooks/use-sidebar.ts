'use client';

import { useState, useCallback } from 'react';

export function useSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = useCallback(() => setCollapsed((prev) => !prev), []);
  const expand = useCallback(() => setCollapsed(false), []);
  const collapse = useCallback(() => setCollapsed(true), []);

  return { collapsed, toggle, expand, collapse };
}
