export const WINDOW_SIZE_CHANGE =
  'WINDOW_SIZE_CHANGE';


const initialState = {
  width: -1,
  isSmall: false,
  isInitial: true
};


export const windowSize =
  (state = initialState,
    {type, ...action}) => {

    switch (type) {
      case WINDOW_SIZE_CHANGE:
        return {
          ...state,
          isInitial: false,
          width: action.width,
          isSmall: action.width <= 768
        };

      default:
        return state;
    }

  };
