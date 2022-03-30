import api from './base';

interface User {
  id?: number;
  nickname?: string;
  password?: string;
  status?: boolean;
  address?: string;
  tel?: string;
}

export const addUser = (params: User) => api.post('/user/add', params);

export const updateUser = (params: User) => api.put('/user/update', params);

export const delUser = (id: number) => api.delete(`/user/delete/${id}`);

export const readUser = (params: User) => api.get('/user/read', { params });
