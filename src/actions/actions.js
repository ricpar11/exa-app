import { CUSTOM_ROUTE } from '../constants/types'
import { TabNames } from '../constants/tabs'
import axios from 'axios';
import { CURRENT_TOURNAMENT_URI,STANDINGS_URI } from '../constants/backend';
import { CURRENT_TOURNAMENT_LOADED_SUCCESS, CURRENT_TOURNAMENT_LOADED_FAILED,STANDINGS_LOADED_SUCCESS,STANDINGS_LOADED_FAILED } from '../constants/types'

const setCustomRouteActionCreator = (routeName,params) => {
    return {
      type: CUSTOM_ROUTE,
      routeName,
      params
    }
  }

  const getCurrentTournament = (savedEtag = null) => (
    (dispatch) => {        
        axios.get(CURRENT_TOURNAMENT_URI, { headers: { 'If-None-Match': savedEtag } })
            .then((response) => {
              console.log("response",response);
                const { etag } = response.headers;
                const tournament = response.data;
                dispatch({ type: CURRENT_TOURNAMENT_LOADED_SUCCESS, tournament, etag });
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: CURRENT_TOURNAMENT_LOADED_FAILED, tournament, etag });
                
                // MessageBarManager.showAlert({
                //     title: 'Error al cargar torneo',
                //     message: 'Verifique su conexión',
                //     alertType: 'error',
                //     duration: 3000,
                //     viewTopInset: 10,
                //     onShow: () => { dispatch({ type: SHOW_RETRY }); }
                // });
            });
    }
);

export const tabFetchContent = (tabName, tournamentId, etag = null) => (
    (dispatch,getState) => {
        switch (tabName) {
            case TabNames.STANDINGS: {
                if (!getState().tournament.failedFetchingTournament) {
                    Promise.resolve();
                }
                console.log("holaaaa");
                
                getTournamentStandings(dispatch, tournamentId, etag);
                break;
            }
            case TabNames.FIXTURE: {
                getFixture(dispatch, tournamentId, etag);
                break;
            }
            case TabNames.TOP_SCORERS: {
                getTopScorers(dispatch, tournamentId, etag);
                break;
            }
            default: break;
        }
    }
);


const getTournamentStandings = (dispatch, tournamentId, savedEtag) => {
    axios.get(STANDINGS_URI(tournamentId), { headers: { 'If-None-Match': savedEtag } })
        .then((response) => {
            const standings = response.data;
            const { etag } = response.headers;
            dispatch({ type: STANDINGS_LOADED_SUCCESS, standings, etag });
        })
        .catch((error) => {
            console.log(error);
            // MessageBarManager.showAlert({
            //     title: 'Error al cargar tabla de posiciones',
            //     message: 'Verifique su conexión',
            //     alertType: 'error',
            //     duration: 3000,
            //     viewTopInset: 10,
            //     onShow: () => { dispatch({ type: SHOW_RETRY, scene: TabNames.STANDINGS }); }
            // });
        });
};

export { setCustomRouteActionCreator,getCurrentTournament }