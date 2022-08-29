const [  SCHEMA_VALIDATION_ERROR, ENTITY_NOT_FOUND_ERROR] = [
    'SCHEMA_VALIDATION_ERROR',
    'ENTITY_NOT_FOUND_ERROR'
  ];
  
  class BaseError extends Error {
    constructor() {
      super();
  
      if (Error.hasOwnProperty('captureStackTrace')) {
        Error.captureStackTrace(this, this.constructor);
      } else {
        Object.defineProperty(this, 'stack', {
          value: new Error().stack,
        });
      }
    }
  }
  
  class SchemaValidationError extends BaseError {
    constructor(params = {}) {
      super(params);
        
      this.name =  SCHEMA_VALIDATION_ERROR;
      this.httpCode = 400;

      this.message= params.details[0].message;
  
      this.path = params.details[0].path;
    }
  }
  class EntityNotFoundError extends BaseError {
    constructor(params = {}) {
      super(params);
        
      this.name = ENTITY_NOT_FOUND_ERROR;
      this.httpCode = 404;
      this.message= params.message;
    }
  }
  module.exports = {
    SchemaValidationError,
    EntityNotFoundError,
    Constants: [SCHEMA_VALIDATION_ERROR , ENTITY_NOT_FOUND_ERROR],
  };