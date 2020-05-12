// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Copyright (C) 2019-2020 Vdaas.org Vald team ( kpango, rinx, kmrmt )
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
'use strict';
var grpc = require('grpc');
var payload_pb = require('../payload_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_payload_Backup_MetaVector(arg) {
  if (!(arg instanceof payload_pb.Backup.MetaVector)) {
    throw new Error('Expected argument of type payload.Backup.MetaVector');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_Backup_MetaVector(buffer_arg) {
  return payload_pb.Backup.MetaVector.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_Empty(arg) {
  if (!(arg instanceof payload_pb.Empty)) {
    throw new Error('Expected argument of type payload.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_Empty(buffer_arg) {
  return payload_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_Object_ID(arg) {
  if (!(arg instanceof payload_pb.Object.ID)) {
    throw new Error('Expected argument of type payload.Object.ID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_Object_ID(buffer_arg) {
  return payload_pb.Object.ID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_Object_IDs(arg) {
  if (!(arg instanceof payload_pb.Object.IDs)) {
    throw new Error('Expected argument of type payload.Object.IDs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_Object_IDs(buffer_arg) {
  return payload_pb.Object.IDs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_Object_Vector(arg) {
  if (!(arg instanceof payload_pb.Object.Vector)) {
    throw new Error('Expected argument of type payload.Object.Vector');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_Object_Vector(buffer_arg) {
  return payload_pb.Object.Vector.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_Object_Vectors(arg) {
  if (!(arg instanceof payload_pb.Object.Vectors)) {
    throw new Error('Expected argument of type payload.Object.Vectors');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_Object_Vectors(buffer_arg) {
  return payload_pb.Object.Vectors.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_Search_IDRequest(arg) {
  if (!(arg instanceof payload_pb.Search.IDRequest)) {
    throw new Error('Expected argument of type payload.Search.IDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_Search_IDRequest(buffer_arg) {
  return payload_pb.Search.IDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_Search_Request(arg) {
  if (!(arg instanceof payload_pb.Search.Request)) {
    throw new Error('Expected argument of type payload.Search.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_Search_Request(buffer_arg) {
  return payload_pb.Search.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_Search_Response(arg) {
  if (!(arg instanceof payload_pb.Search.Response)) {
    throw new Error('Expected argument of type payload.Search.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_Search_Response(buffer_arg) {
  return payload_pb.Search.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var ValdService = exports.ValdService = {
  exists: {
    path: '/vald.Vald/Exists',
    requestStream: false,
    responseStream: false,
    requestType: payload_pb.Object.ID,
    responseType: payload_pb.Object.ID,
    requestSerialize: serialize_payload_Object_ID,
    requestDeserialize: deserialize_payload_Object_ID,
    responseSerialize: serialize_payload_Object_ID,
    responseDeserialize: deserialize_payload_Object_ID,
  },
  search: {
    path: '/vald.Vald/Search',
    requestStream: false,
    responseStream: false,
    requestType: payload_pb.Search.Request,
    responseType: payload_pb.Search.Response,
    requestSerialize: serialize_payload_Search_Request,
    requestDeserialize: deserialize_payload_Search_Request,
    responseSerialize: serialize_payload_Search_Response,
    responseDeserialize: deserialize_payload_Search_Response,
  },
  searchByID: {
    path: '/vald.Vald/SearchByID',
    requestStream: false,
    responseStream: false,
    requestType: payload_pb.Search.IDRequest,
    responseType: payload_pb.Search.Response,
    requestSerialize: serialize_payload_Search_IDRequest,
    requestDeserialize: deserialize_payload_Search_IDRequest,
    responseSerialize: serialize_payload_Search_Response,
    responseDeserialize: deserialize_payload_Search_Response,
  },
  streamSearch: {
    path: '/vald.Vald/StreamSearch',
    requestStream: true,
    responseStream: true,
    requestType: payload_pb.Search.Request,
    responseType: payload_pb.Search.Response,
    requestSerialize: serialize_payload_Search_Request,
    requestDeserialize: deserialize_payload_Search_Request,
    responseSerialize: serialize_payload_Search_Response,
    responseDeserialize: deserialize_payload_Search_Response,
  },
  streamSearchByID: {
    path: '/vald.Vald/StreamSearchByID',
    requestStream: true,
    responseStream: true,
    requestType: payload_pb.Search.IDRequest,
    responseType: payload_pb.Search.Response,
    requestSerialize: serialize_payload_Search_IDRequest,
    requestDeserialize: deserialize_payload_Search_IDRequest,
    responseSerialize: serialize_payload_Search_Response,
    responseDeserialize: deserialize_payload_Search_Response,
  },
  insert: {
    path: '/vald.Vald/Insert',
    requestStream: false,
    responseStream: false,
    requestType: payload_pb.Object.Vector,
    responseType: payload_pb.Empty,
    requestSerialize: serialize_payload_Object_Vector,
    requestDeserialize: deserialize_payload_Object_Vector,
    responseSerialize: serialize_payload_Empty,
    responseDeserialize: deserialize_payload_Empty,
  },
  streamInsert: {
    path: '/vald.Vald/StreamInsert',
    requestStream: true,
    responseStream: true,
    requestType: payload_pb.Object.Vector,
    responseType: payload_pb.Empty,
    requestSerialize: serialize_payload_Object_Vector,
    requestDeserialize: deserialize_payload_Object_Vector,
    responseSerialize: serialize_payload_Empty,
    responseDeserialize: deserialize_payload_Empty,
  },
  multiInsert: {
    path: '/vald.Vald/MultiInsert',
    requestStream: false,
    responseStream: false,
    requestType: payload_pb.Object.Vectors,
    responseType: payload_pb.Empty,
    requestSerialize: serialize_payload_Object_Vectors,
    requestDeserialize: deserialize_payload_Object_Vectors,
    responseSerialize: serialize_payload_Empty,
    responseDeserialize: deserialize_payload_Empty,
  },
  update: {
    path: '/vald.Vald/Update',
    requestStream: false,
    responseStream: false,
    requestType: payload_pb.Object.Vector,
    responseType: payload_pb.Empty,
    requestSerialize: serialize_payload_Object_Vector,
    requestDeserialize: deserialize_payload_Object_Vector,
    responseSerialize: serialize_payload_Empty,
    responseDeserialize: deserialize_payload_Empty,
  },
  streamUpdate: {
    path: '/vald.Vald/StreamUpdate',
    requestStream: true,
    responseStream: true,
    requestType: payload_pb.Object.Vector,
    responseType: payload_pb.Empty,
    requestSerialize: serialize_payload_Object_Vector,
    requestDeserialize: deserialize_payload_Object_Vector,
    responseSerialize: serialize_payload_Empty,
    responseDeserialize: deserialize_payload_Empty,
  },
  multiUpdate: {
    path: '/vald.Vald/MultiUpdate',
    requestStream: false,
    responseStream: false,
    requestType: payload_pb.Object.Vectors,
    responseType: payload_pb.Empty,
    requestSerialize: serialize_payload_Object_Vectors,
    requestDeserialize: deserialize_payload_Object_Vectors,
    responseSerialize: serialize_payload_Empty,
    responseDeserialize: deserialize_payload_Empty,
  },
  upsert: {
    path: '/vald.Vald/Upsert',
    requestStream: false,
    responseStream: false,
    requestType: payload_pb.Object.Vector,
    responseType: payload_pb.Empty,
    requestSerialize: serialize_payload_Object_Vector,
    requestDeserialize: deserialize_payload_Object_Vector,
    responseSerialize: serialize_payload_Empty,
    responseDeserialize: deserialize_payload_Empty,
  },
  streamUpsert: {
    path: '/vald.Vald/StreamUpsert',
    requestStream: true,
    responseStream: true,
    requestType: payload_pb.Object.Vector,
    responseType: payload_pb.Empty,
    requestSerialize: serialize_payload_Object_Vector,
    requestDeserialize: deserialize_payload_Object_Vector,
    responseSerialize: serialize_payload_Empty,
    responseDeserialize: deserialize_payload_Empty,
  },
  multiUpsert: {
    path: '/vald.Vald/MultiUpsert',
    requestStream: false,
    responseStream: false,
    requestType: payload_pb.Object.Vectors,
    responseType: payload_pb.Empty,
    requestSerialize: serialize_payload_Object_Vectors,
    requestDeserialize: deserialize_payload_Object_Vectors,
    responseSerialize: serialize_payload_Empty,
    responseDeserialize: deserialize_payload_Empty,
  },
  remove: {
    path: '/vald.Vald/Remove',
    requestStream: false,
    responseStream: false,
    requestType: payload_pb.Object.ID,
    responseType: payload_pb.Empty,
    requestSerialize: serialize_payload_Object_ID,
    requestDeserialize: deserialize_payload_Object_ID,
    responseSerialize: serialize_payload_Empty,
    responseDeserialize: deserialize_payload_Empty,
  },
  streamRemove: {
    path: '/vald.Vald/StreamRemove',
    requestStream: true,
    responseStream: true,
    requestType: payload_pb.Object.ID,
    responseType: payload_pb.Empty,
    requestSerialize: serialize_payload_Object_ID,
    requestDeserialize: deserialize_payload_Object_ID,
    responseSerialize: serialize_payload_Empty,
    responseDeserialize: deserialize_payload_Empty,
  },
  multiRemove: {
    path: '/vald.Vald/MultiRemove',
    requestStream: false,
    responseStream: false,
    requestType: payload_pb.Object.IDs,
    responseType: payload_pb.Empty,
    requestSerialize: serialize_payload_Object_IDs,
    requestDeserialize: deserialize_payload_Object_IDs,
    responseSerialize: serialize_payload_Empty,
    responseDeserialize: deserialize_payload_Empty,
  },
  getObject: {
    path: '/vald.Vald/GetObject',
    requestStream: false,
    responseStream: false,
    requestType: payload_pb.Object.ID,
    responseType: payload_pb.Backup.MetaVector,
    requestSerialize: serialize_payload_Object_ID,
    requestDeserialize: deserialize_payload_Object_ID,
    responseSerialize: serialize_payload_Backup_MetaVector,
    responseDeserialize: deserialize_payload_Backup_MetaVector,
  },
  streamGetObject: {
    path: '/vald.Vald/StreamGetObject',
    requestStream: true,
    responseStream: true,
    requestType: payload_pb.Object.ID,
    responseType: payload_pb.Backup.MetaVector,
    requestSerialize: serialize_payload_Object_ID,
    requestDeserialize: deserialize_payload_Object_ID,
    responseSerialize: serialize_payload_Backup_MetaVector,
    responseDeserialize: deserialize_payload_Backup_MetaVector,
  },
};

exports.ValdClient = grpc.makeGenericClientConstructor(ValdService);