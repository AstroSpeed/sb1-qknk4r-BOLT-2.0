import { atom } from 'jotai';
import { User } from '../types/auth';

export const userAtom = atom<User | null>(null);
export const isAuthenticatedAtom = atom(get => !!get(userAtom));
export const isAdminAtom = atom(get => get(userAtom)?.role === 'admin');