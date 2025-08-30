import { ContactResponse } from '@/types/contact';
import { SchemaFormInput } from '@/validator/contact';
import axios, { AxiosError } from 'axios';

const ENDPOINT = {
  CONTACT: '/api/contact',
};

export async function postContact(
  payload: SchemaFormInput
): Promise<ContactResponse> {
  try {
    const response = await axios.post<ContactResponse>(
      ENDPOINT.CONTACT,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (err) {
    const error = err as AxiosError<ContactResponse>;
    if (error.response) {
      throw error.response.data; // balikan error dari server
    }
    throw { message: 'Unknown error', success: false };
  }
}
