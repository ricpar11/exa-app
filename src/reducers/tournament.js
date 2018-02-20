import { CURRENT_TOURNAMENT_LOADED_SUCCESS, CURRENT_TOURNAMENT_LOADED_FAILED,CURRENT_TOURNAMENT_TAB_SUCCESS, STANDINGS_LOADED_SUCCESS, STANDINGS_LOADED_FAILED } from '../constants/types'

const initialState = {
  current: null,
  failedFetchingTournament: false,
  failedFetchingData: false,
  showLoading: true,
  data: []
}

const tournament = (state=initialState, action) => {
  switch (action.type) {
        case CURRENT_TOURNAMENT_LOADED_SUCCESS:
            return {
              ...state,
              current: action.tournament,
              failedFetchingTournament: false
            }
            break;
        case CURRENT_TOURNAMENT_LOADED_FAILED:
          return{
            ...state,
            failedFetchingTournament: true
          }
          break;
        case STANDINGS_LOADED_SUCCESS: 
            return {
              ...state,
              data: action.standings,
              failedFetchingData: false,
              showLoading: false
            }
          break;
        case STANDINGS_LOADED_FAILED: 
          return {
            ...state,
            failedFetchingData: true
          }
        break;
      default:
        return state;

  }
}

export default tournament
