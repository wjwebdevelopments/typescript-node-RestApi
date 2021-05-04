const getTimeStamp = (): string => {
    return new Date().toISOString()
}

const info = (namaspace: string, message: string, object?: any) => {
    if (object) {
        console.info(`[${getTimeStamp()}] [INFO] [${namaspace}] ${message}`, object)
    } else {
        console.info(`[${getTimeStamp()}] [INFO] [${namaspace}] ${message}`)
    }
}

const warn = (namaspace: string, message: string, object?: any) => {
    if (object) {
        console.warn(`[${getTimeStamp()}] [WARN] [${namaspace}] ${message}`, object)
    } else {
        console.warn(`[${getTimeStamp()}] [WARN] [${namaspace}] ${message}`)
    }
}

const error = (namaspace: string, message: string, object?: any) => {
    if (object) {
        console.error(`[${getTimeStamp()}] [ERROR] [${namaspace}] ${message}`, object)
    } else {
        console.error(`[${getTimeStamp()}] [ERROR] [${namaspace}] ${message}`)
    }
}

const debug = (namaspace: string, message: string, object?: any) => {
    if (object) {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namaspace}] ${message}`, object)
    } else {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namaspace}] ${message}`)
    }
}

export default {
    info,
    warn,
    error,
    debug,
}
