import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Constants from "expo-constants";
import { Stack } from "expo-router";

export default function RootLayout() {
  let hostIP = "";
  if (Constants !== undefined) {
    if (Constants.expoConfig && Constants.expoConfig.hostUri) {
      hostIP = Constants.expoConfig.hostUri.split(`:`)[0];
    }
  }
  const client = new ApolloClient({
    uri: hostIP ? `http://${hostIP}:4000/graphql` : "http://produrl/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </ApolloProvider>
  );
}
