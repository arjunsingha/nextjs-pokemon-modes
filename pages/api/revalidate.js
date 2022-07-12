export default async function handler(req, res) {
    for(const url in req.body){
        await res.unstable_revalidate(url);
    }
    res.status(200).json({ revalidate: true })
  } 