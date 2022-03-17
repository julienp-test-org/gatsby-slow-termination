process.on("SIGTERM", async () => {
  console.log("Got SIGTERM, waiting 2 minutes ...")
  await new Promise(resolve => setTimeout(resolve, 2 * 60 * 1000))
  process.exit(0)
})
