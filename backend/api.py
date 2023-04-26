from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get('/')
async def root():
    content = { "status": "ok" }
    headers = { "Cache-Control": "no-cache" }
    return JSONResponse(content=content, headers=headers)