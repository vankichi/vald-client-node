// GENERATED CODE -- DO NOT EDIT!

// package: vald.v1
// file: vald/v1/vald/search.proto

import * as vald_v1_vald_search_pb from "../../../vald/v1/vald/search_pb";
import * as vald_v1_payload_payload_pb from "../../../vald/v1/payload/payload_pb";
import * as grpc from "@grpc/grpc-js";

interface ISearchService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  search: grpc.MethodDefinition<vald_v1_payload_payload_pb.Search.Request, vald_v1_payload_payload_pb.Search.Response>;
  searchByID: grpc.MethodDefinition<vald_v1_payload_payload_pb.Search.IDRequest, vald_v1_payload_payload_pb.Search.Response>;
  streamSearch: grpc.MethodDefinition<vald_v1_payload_payload_pb.Search.Request, vald_v1_payload_payload_pb.Search.StreamResponse>;
  streamSearchByID: grpc.MethodDefinition<vald_v1_payload_payload_pb.Search.IDRequest, vald_v1_payload_payload_pb.Search.StreamResponse>;
  multiSearch: grpc.MethodDefinition<vald_v1_payload_payload_pb.Search.MultiRequest, vald_v1_payload_payload_pb.Search.Responses>;
  multiSearchByID: grpc.MethodDefinition<vald_v1_payload_payload_pb.Search.MultiIDRequest, vald_v1_payload_payload_pb.Search.Responses>;
  linearSearch: grpc.MethodDefinition<vald_v1_payload_payload_pb.Search.Request, vald_v1_payload_payload_pb.Search.Response>;
  linearSearchByID: grpc.MethodDefinition<vald_v1_payload_payload_pb.Search.IDRequest, vald_v1_payload_payload_pb.Search.Response>;
  streamLinearSearch: grpc.MethodDefinition<vald_v1_payload_payload_pb.Search.Request, vald_v1_payload_payload_pb.Search.StreamResponse>;
  streamLinearSearchByID: grpc.MethodDefinition<vald_v1_payload_payload_pb.Search.IDRequest, vald_v1_payload_payload_pb.Search.StreamResponse>;
  multiLinearSearch: grpc.MethodDefinition<vald_v1_payload_payload_pb.Search.MultiRequest, vald_v1_payload_payload_pb.Search.Responses>;
  multiLinearSearchByID: grpc.MethodDefinition<vald_v1_payload_payload_pb.Search.MultiIDRequest, vald_v1_payload_payload_pb.Search.Responses>;
}

export const SearchService: ISearchService;

export class SearchClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  search(argument: vald_v1_payload_payload_pb.Search.Request, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  search(argument: vald_v1_payload_payload_pb.Search.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  search(argument: vald_v1_payload_payload_pb.Search.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  searchByID(argument: vald_v1_payload_payload_pb.Search.IDRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  searchByID(argument: vald_v1_payload_payload_pb.Search.IDRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  searchByID(argument: vald_v1_payload_payload_pb.Search.IDRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  streamSearch(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Search.Request, vald_v1_payload_payload_pb.Search.StreamResponse>;
  streamSearch(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Search.Request, vald_v1_payload_payload_pb.Search.StreamResponse>;
  streamSearchByID(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Search.IDRequest, vald_v1_payload_payload_pb.Search.StreamResponse>;
  streamSearchByID(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Search.IDRequest, vald_v1_payload_payload_pb.Search.StreamResponse>;
  multiSearch(argument: vald_v1_payload_payload_pb.Search.MultiRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Responses>): grpc.ClientUnaryCall;
  multiSearch(argument: vald_v1_payload_payload_pb.Search.MultiRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Responses>): grpc.ClientUnaryCall;
  multiSearch(argument: vald_v1_payload_payload_pb.Search.MultiRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Responses>): grpc.ClientUnaryCall;
  multiSearchByID(argument: vald_v1_payload_payload_pb.Search.MultiIDRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Responses>): grpc.ClientUnaryCall;
  multiSearchByID(argument: vald_v1_payload_payload_pb.Search.MultiIDRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Responses>): grpc.ClientUnaryCall;
  multiSearchByID(argument: vald_v1_payload_payload_pb.Search.MultiIDRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Responses>): grpc.ClientUnaryCall;
  linearSearch(argument: vald_v1_payload_payload_pb.Search.Request, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  linearSearch(argument: vald_v1_payload_payload_pb.Search.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  linearSearch(argument: vald_v1_payload_payload_pb.Search.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  linearSearchByID(argument: vald_v1_payload_payload_pb.Search.IDRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  linearSearchByID(argument: vald_v1_payload_payload_pb.Search.IDRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  linearSearchByID(argument: vald_v1_payload_payload_pb.Search.IDRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  streamLinearSearch(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Search.Request, vald_v1_payload_payload_pb.Search.StreamResponse>;
  streamLinearSearch(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Search.Request, vald_v1_payload_payload_pb.Search.StreamResponse>;
  streamLinearSearchByID(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Search.IDRequest, vald_v1_payload_payload_pb.Search.StreamResponse>;
  streamLinearSearchByID(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Search.IDRequest, vald_v1_payload_payload_pb.Search.StreamResponse>;
  multiLinearSearch(argument: vald_v1_payload_payload_pb.Search.MultiRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Responses>): grpc.ClientUnaryCall;
  multiLinearSearch(argument: vald_v1_payload_payload_pb.Search.MultiRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Responses>): grpc.ClientUnaryCall;
  multiLinearSearch(argument: vald_v1_payload_payload_pb.Search.MultiRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Responses>): grpc.ClientUnaryCall;
  multiLinearSearchByID(argument: vald_v1_payload_payload_pb.Search.MultiIDRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Responses>): grpc.ClientUnaryCall;
  multiLinearSearchByID(argument: vald_v1_payload_payload_pb.Search.MultiIDRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Responses>): grpc.ClientUnaryCall;
  multiLinearSearchByID(argument: vald_v1_payload_payload_pb.Search.MultiIDRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Responses>): grpc.ClientUnaryCall;
}
