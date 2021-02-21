/**
 * Client util function
 *
 *
 **/

function client(endpoint: string, customConfig = {}) {
  const config = {
    method: 'GET',
    ...customConfig,
  }

  return window.fetch(`${endpoint}`, config).then(response => response.json())
}

export {client}
