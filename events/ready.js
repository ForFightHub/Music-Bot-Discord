module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}, Have Fun!`);
  await client.user.setActivity("!help", {
	//Use : LISTENING, WATCHING, PLAYING & STREAMING
    type: "LISTENING",
  });
};
