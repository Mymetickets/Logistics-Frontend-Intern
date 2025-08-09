export default function useGenerateId() {
  const gen_id = Math.floor(Math.random() * 10000);
  return gen_id;
}
