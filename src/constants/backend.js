export const BASE_URL = 'https://exa-sil.herokuapp.com';
//export const BASE_URL = 'http://192.168.0.16:5000';
export const CURRENT_TOURNAMENT_URI = `${BASE_URL}/torneo/current`;
export const STANDINGS_URI = (id) => (`${BASE_URL}/torneo/${id}/tabla`);
export const TOP_SCORERS_URI = (id) => (`${BASE_URL}/torneo/${id}/goleadores`);
export const FIXTURE_URI = (id) => (`${BASE_URL}/torneo/${id}/fixture`);
export const TEAM_STATS_URI = (tournamentId, teamId) => (`${BASE_URL}/torneo/${tournamentId}/equipo/${teamId}`);
export const MATCH_DETAILS_URI = (matchId) => (`${BASE_URL}/torneo/partido/${matchId}`);
export const MATCH_HISTORY_URI = (teamId, anotherTeamId) => (`${BASE_URL}/torneo/historial/${teamId}/${anotherTeamId}`);
