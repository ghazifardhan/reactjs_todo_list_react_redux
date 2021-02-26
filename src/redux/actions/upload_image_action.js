import { storage } from "../../utils/firebase";

export const uploadImageTypes = {
  UPLOAD_IMAGE: "UPLOAD_IMAGE",
  UPLOAD_IMAGE_SUCCESS: "UPLOAD_IMAGE_SUCCESS",
  UPLOAD_IMAGE_ERROR: "UPLOAD_IMAGE_ERROR",
}

export function uploadImageInit(imageUrl) {
  return dispatch => {
    dispatch({
      type: uploadImageTypes.UPLOAD_IMAGE_SUCCESS,
      loading: false,
      imageUrl: imageUrl,
    });
  }
}

export function uploadImage(file) {
  return dispatch => {
    dispatch({
      type: uploadImageTypes.UPLOAD_IMAGE,
      loading: true,
      imageUrl: "",
    });

    // upload to firebase first
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapshot)
      }, (err) => {
        //catches the errors
        dispatch({
          type: uploadImageTypes.err,
          loading: false,
          imageUrl: "",
        });
        console.log(err);
      }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage.ref('images').child(file.name).getDownloadURL()
        .then(fireBaseUrl => {

          dispatch({
            type: uploadImageTypes.UPLOAD_IMAGE_SUCCESS,
            loading: false,
            imageUrl: fireBaseUrl,
          });
          console.log(fireBaseUrl);
          // setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
        })
      }
    )
  }
}