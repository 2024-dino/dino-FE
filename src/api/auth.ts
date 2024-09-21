import axios from 'axios';

export const validateToken = async (accessCode: string) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/validation-jwt`,
    {
      headers: {
        Authorization: `Bearer ${accessCode}`,
      },
    },
  );
  return response.data;
};
