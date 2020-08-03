export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Channel = {
  __typename?: 'Channel';
  id: Scalars['Int'];
  name: Scalars['String'];
  messages?: Maybe<Array<Maybe<Message>>>;
  team?: Maybe<Team>;
  users?: Maybe<Array<Maybe<User>>>;
  shared: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type CreateChannelResponse = {
  __typename?: 'CreateChannelResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type CreateTeamResponse = {
  __typename?: 'CreateTeamResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type GetAllUserResponse = {
  __typename?: 'GetAllUserResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  user?: Maybe<Array<Maybe<User>>>;
};

export type GetUserResponse = {
  __typename?: 'GetUserResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['Int'];
  content: Scalars['String'];
  channel: Channel;
  sender: User;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateChannel: CreateChannelResponse;
  CreateTeam: CreateTeamResponse;
  CreateUser: CreateUserResponse;
  PostMessage: PostMessageResponse;
  SignIn: SignInResponse;
};


export type MutationCreateChannelArgs = {
  teamId: Scalars['Int'];
  name: Scalars['String'];
  shared?: Scalars['Boolean'];
};


export type MutationCreateTeamArgs = {
  name: Scalars['String'];
};


export type MutationCreateUserArgs = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationPostMessageArgs = {
  channelId: Scalars['Int'];
  content: Scalars['String'];
};


export type MutationSignInArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type PostMessageResponse = {
  __typename?: 'PostMessageResponse';
  ok: Scalars['Boolean'];
  channelId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  GetUser: GetUserResponse;
  GetAllUsers: GetAllUserResponse;
};


export type QueryGetUserArgs = {
  id: Scalars['Int'];
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['Int'];
  name: Scalars['String'];
  owner: User;
  members?: Maybe<Array<Maybe<User>>>;
  channels?: Maybe<Array<Maybe<Channel>>>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  messages?: Maybe<Array<Maybe<Message>>>;
  ownedTeams?: Maybe<Array<Maybe<Team>>>;
  teams?: Maybe<Array<Maybe<Team>>>;
  channels?: Maybe<Array<Maybe<Channel>>>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type Verification = {
  __typename?: 'Verification';
  id: Scalars['Int'];
  target: Scalars['String'];
  payload: Scalars['String'];
  key: Scalars['String'];
  used: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};
