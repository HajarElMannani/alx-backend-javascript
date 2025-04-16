import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const picture = await uploadPhoto();
    const username = await createUser();
    return { picture, username };
  } catch (error) {
    return { picture: null, username: null };
  }
}
