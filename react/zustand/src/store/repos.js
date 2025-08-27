// 做一个请求
import { getRepos, getRepoList } from '../api/repo';
import { create } from 'zustand';

export const useReposStore = create((set) => ({
    repos: [],
    loading: false,
    error: null,
    fetchRepos: async () => {
        set({ loading: true, error: null });
        try {
            const res = await getRepoList('SkyesRol')
            set({ repos: res, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    getRepoList: async (owner) => {
        const res = await getRepoList(owner);
        set({ repos: res });
    },
}))








