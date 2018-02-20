import { LOADING_FAILED } from '../constants/types'

const ui = (state={showRetry: false, showLoading:true }, action) => {
  switch (action.type) {
        case LOADING_FAILED:
            return {
              showRetry: true,
              showLoading: false
            }
            break;
      default:
        return state;

  }
}

export default ui
