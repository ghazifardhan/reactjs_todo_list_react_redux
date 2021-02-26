import { uploadImageTypes } from '../actions/upload_image_action';

let uploadImageInitialState = {
  type: uploadImageTypes.UPLOAD_IMAGE,
  loading: false,
  imageUrl: ""
}

export const uploadImageReducer = (state = uploadImageInitialState, action) => {
  switch (action.type) {
    case uploadImageTypes.UPLOAD_IMAGE:
      return {
        type: action.type,
        loading: action.loading,
        imageUrl: action.imageUrl
      };
    case uploadImageTypes.UPLOAD_IMAGE_SUCCESS:
      return {
        type: action.type,
        loading: action.loading,
        imageUrl: action.imageUrl
      };
    case uploadImageTypes.UPLOAD_IMAGE_ERROR:
      return {
        type: action.type,
        loading: action.loading,
        imageUrl: action.imageUrl
      };
    default:
      return state;
  }
}