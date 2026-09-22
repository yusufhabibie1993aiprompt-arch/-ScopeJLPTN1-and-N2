export async function askJson(system, input) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error('OPENAI_API_KEY belum di-set di Vercel');
  const model = process.env.OPENAI_MODEL || 'gpt-5.6-luna';
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json'},
    body: JSON.stringify({
      model,
      input: [
        {role:'system', content:[{type:'input_text', text:system}]},
        {role:'user', content:[{type:'input_text', text:input}]}
      ]
    })
  });
  if (!response.ok) throw new Error(`OpenAI ${response.status}: ${await response.text()}`);
  const data = await response.json();
  const text = data.output_text || (data.output || []).flatMap(x=>x.content||[]).find(x=>x.type==='output_text')?.text || '';
  const cleaned = text.replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,'').trim();
  return JSON.parse(cleaned);
}
