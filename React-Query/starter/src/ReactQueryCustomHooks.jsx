import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query"
import customFetch from "./utils"
import { toast } from "react-toastify";

export const useFetchTasks = () => {
    const { isLoading, data } = useQuery({
        queryKey: ['tasks'],
        queryFn: () => customFetch.get('/')   //custom-api
    })

    return { isLoading, data };
}

export const useCreateTask = ({setNewItemName}) => {
    const QueryClient = useQueryClient();

    const { mutate: createTask, isLoading } = useMutation({
        mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),
        onSuccess: () => {
            QueryClient.invalidateQueries({ queryKey: ['tasks'] });
            toast.success('Task Added');
            setNewItemName('');
        },
        onError: () => {
            toast.error("Add Task");
        }
    })
    return {createTask, isLoading};
}


export const useEditTask = () => {
    const QueryClient = useQueryClient();

    const { mutate: editTask } = useMutation({
        mutationFn: ({ taskId, isDone }) => {
            return customFetch.patch(`/${taskId}`, { isDone })
        },
        onSuccess: () => {
            QueryClient.invalidateQueries({ queryKey: ['tasks'] });
        }
    })

    return { editTask };
}

export const useDeleteTask = () => {
    const QueryClient = useQueryClient();

    const { mutate: deleteTask } = useMutation({
        mutationFn: ({ taskId }) => {
            return customFetch.delete(`/${taskId}`)
        },
        onSuccess: () => {
            QueryClient.invalidateQueries({ queryKey: ['tasks'] });
            toast.delete('Task Deleted');
        }
    })

    return { deleteTask };
}