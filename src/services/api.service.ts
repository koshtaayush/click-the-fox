/**
  * Util to make POST call
*/
const makePost = (url: string, data: object) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
};

/**
  * Util to make GET call
*/
const makeGet = (url: string) => {
  return fetch(url)
    .then(checkStatus)
    .then(parseJSON);
};

/**
  * Util to check the status code for the response
*/
function checkStatus(response: any) {
	try {
		if (response.status >= 200 && response.status < 300) {
			return response;
		} else {
			return response.json().then((json: any) => {
				return Promise.reject(json);
			});
		}
	} catch (err) {
		throw err;
	}
}

/**
  * Util to parse the response
*/
function parseJSON(response: any) {
	try {
		if (response.status === 204 || response.status === 205) {
			return {};
		}
		return response.json();
	} catch (err) {
		throw err;
	}
}

export { makePost, makeGet };
