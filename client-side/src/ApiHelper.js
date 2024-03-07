import { useQuery, useMutation, useQueryClient } from "react-query";
import { axios } from "utils/Axios";

// Demo Get
export const demoGetApi = async (params = {}) => {
  return await axios.get(`/posts`, { params });
};

export const useDemoGetApi = (params) => {
  return useQuery(["formData", params], () => demoGetApi(params));
};

// Demo Post
export const demoPostApi = async (data) => {
  return await axios.post('/posts', { ...data });
};

export const useDemoPostApi = () => {
  return useMutation({
    mutationFn: (resData) => demoPostApi(resData),
  });
};

//   const queryClient = useQueryClient();
//  queryClient.refetchQueries(refetchKey);