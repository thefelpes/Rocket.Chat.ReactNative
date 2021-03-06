const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const defaultTypes = [REQUEST, SUCCESS, FAILURE];
function createRequestTypes(base, types = defaultTypes) {
	const res = {};
	types.forEach(type => (res[type] = `${ base }_${ type }`));
	return res;
}

// Login events
export const LOGIN = createRequestTypes('LOGIN', [
	...defaultTypes,
	'SET_TOKEN',
	'RESTORE_TOKEN',
	'SUBMIT',
	'REGISTER_SUBMIT',
	'REGISTER_REQUEST',
	'REGISTER_SUCCESS',
	'REGISTER_INCOMPLETE',
	'SET_USERNAME_SUBMIT',
	'SET_USERNAME_REQUEST',
	'SET_USERNAME_SUCCESS'
]);
export const FORGOT_PASSWORD = createRequestTypes('FORGOT_PASSWORD', [
	...defaultTypes,
	'INIT'
]);
export const USER = createRequestTypes('USER', ['SET']);
export const ROOMS = createRequestTypes('ROOMS', [...defaultTypes, 'SET_SEARCH']);
export const ROOM = createRequestTypes('ROOM', ['ADD_USER_TYPING', 'REMOVE_USER_TYPING', 'SOMEONE_TYPING', 'OPEN', 'USER_TYPING']);
export const APP = createRequestTypes('APP', ['READY', 'INIT']);
export const MESSAGES = createRequestTypes('MESSAGES', [
	...defaultTypes,
	'ACTIONS_SHOW',
	'ACTIONS_HIDE',
	'ERROR_ACTIONS_SHOW',
	'ERROR_ACTIONS_HIDE',
	'DELETE_REQUEST',
	'DELETE_SUCCESS',
	'DELETE_FAILURE',
	'EDIT_INIT',
	'EDIT_CANCEL',
	'EDIT_REQUEST',
	'EDIT_SUCCESS',
	'EDIT_FAILURE',
	'TOGGLE_STAR_REQUEST',
	'TOGGLE_STAR_SUCCESS',
	'TOGGLE_STAR_FAILURE',
	'PERMALINK_REQUEST',
	'PERMALINK_SUCCESS',
	'PERMALINK_FAILURE',
	'PERMALINK_CLEAR',
	'TOGGLE_PIN_REQUEST',
	'TOGGLE_PIN_SUCCESS',
	'TOGGLE_PIN_FAILURE',
	'SET_INPUT',
	'CLEAR_INPUT'
]);
export const CREATE_CHANNEL = createRequestTypes('CREATE_CHANNEL', [
	...defaultTypes,
	'REQUEST_USERS',
	'SUCCESS_USERS',
	'FAILURE_USERS',
	'SET_USERS',
	'ADD_USER',
	'REMOVE_USER',
	'RESET'
]);
export const NAVIGATION = createRequestTypes('NAVIGATION', ['SET']);
export const SERVER = createRequestTypes('SERVER', [
	...defaultTypes,
	'SELECT',
	'CHANGED',
	'ADD',
	'GOTO_ADD'
]);
export const METEOR = createRequestTypes('METEOR_CONNECT', [...defaultTypes, 'DISCONNECT']);
export const LOGOUT = 'LOGOUT'; // logout is always success
export const ACTIVE_USERS = createRequestTypes('ACTIVE_USERS', ['SET', 'REQUEST']);

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
