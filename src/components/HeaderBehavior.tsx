'use client';
import { useEffect } from 'react';

export function HeaderBehavior() {
  useEffect(() => {
    const header = document.querySelector('.br-site-header');
    if (!header) return;
    const groups = Array.from(header.querySelectorAll<HTMLDetailsElement>('.br-nav-group'));
    const mobile = header.querySelector<HTMLDetailsElement>('.br-mobile-nav');

    const closeAll = () => {
      groups.forEach((group) => { group.open = false; });
      if (mobile) mobile.open = false;
    };

    const onToggle = (event: Event) => {
      const current = event.currentTarget as HTMLDetailsElement;
      if (!current.open) return;
      groups.forEach((group) => {
        if (group !== current) group.open = false;
      });
      if (mobile && current !== mobile) mobile.open = false;
    };

    groups.forEach((group) => group.addEventListener('toggle', onToggle));
    if (mobile) mobile.addEventListener('toggle', onToggle);

    const onDocClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!header.contains(target)) {
        closeAll();
      }
    };

    const links = Array.from(header.querySelectorAll('a'));
    links.forEach((a) => a.addEventListener('click', closeAll));

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAll();
      }
    };

    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);

    return () => {
      groups.forEach((group) => group.removeEventListener('toggle', onToggle));
      if (mobile) mobile.removeEventListener('toggle', onToggle);
      links.forEach((a) => a.removeEventListener('click', closeAll));
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return null;
}

