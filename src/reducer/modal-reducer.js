export const modalReducer = (modalState, { type, payload }) => {
    switch (type) {
      case "SHOW_MODAL":
        return {
          ...modalState,
          isModalOpen: !modalState.isModalOpen
        };
  
      case "SHOW_FORM":
        return {
          ...modalState,
          isFormOpen: !modalState.isFormOpen
        };

      case "PLAYLIST_NAME":
        return {
          ...modalState,
          playlistName: payload
        }
  
      default:
        return modalState;
    }
};
  