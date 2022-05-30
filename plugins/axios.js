const templateError = {
  success: false,
  message: 'Error desconocido',
}

export default function (app) {
  const { $axios } = app

  $axios.onError(async (error) => {
    if (!error.response) return Promise.reject(templateError)

    return Promise.reject(error.response)
  })
}
