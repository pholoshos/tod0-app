
import { create } from 'apisauce'

const jabDBURL = "http://localhost:65504";

const api = create({
    baseURL: jabDBURL,
    headers: { Accept: 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzA5ODMwMTI3LCJleHAiOjE3NDEzODc3Mjd9.xSmwAEPZMAaah4V-kX1Re14M7-WQYLglFS6hNA2pVTA' },
});

const addTask = async (task: any) => {
    return await api.post('/tasks', task);
}

const getTasks = async () => {
    return await api.get('/tasks');
}

const deleteTask = async (id: string) => {
    return await api.delete(`/tasks/${id}`);
}

const updateTask = async (id: string, task: any) => {
    return await api.put(`/tasks/${id}`, task);
}

export { addTask, getTasks, deleteTask ,updateTask}



