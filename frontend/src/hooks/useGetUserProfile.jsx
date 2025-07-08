import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { USER_API_ENDPOINT } from '../utils/constant';
import { setUser } from '../redux/authSlice';


const useGetUserProfile = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        try {
            const getUserProfile = async () => {
                const res = await axios.get(`${USER_API_ENDPOINT}/profile`, {
                    withCredentials: true
                })

                if (res.data.success) {
                    dispatch(setUser(res.data.user));
                }
            }
            getUserProfile();
        } catch (err) {
            console.log(err);
        }
    }, [dispatch])
}

export default useGetUserProfile
