# JaldiHelp — API Layer

All UI talks to `src/lib/api`. Today the methods return mock data; flip
`USE_MOCKS = false` in `client.ts` (or set `VITE_API_BASE_URL`) to hit a real
FastAPI backend. Endpoint paths are documented in `client.ts` — implement them
1-to-1 on the Python side and the UI keeps working.

```
src/lib/api/
  client.ts   ← fetch wrapper + base URL + mock switch
  index.ts    ← typed methods: api.vendors.list(), api.bookings.create(), …
  types.ts    ← shared DTOs (must match FastAPI Pydantic schemas)
```

## FastAPI contract (suggested)

```python
# main.py
from fastapi import FastAPI, APIRouter
app = FastAPI()
v1 = APIRouter(prefix="/api/v1")

@v1.get("/vendors") def list_vendors(category: str | None = None, ...): ...
@v1.get("/vendors/{id}") def get_vendor(id: str): ...
@v1.post("/bookings") def create_booking(req: BookingRequest): ...

app.include_router(v1)
```
