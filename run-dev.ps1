# Start Backend
Start-Process -FilePath "npm" -ArgumentList "start" -WorkingDirectory ".\server" -NoNewWindow: $false

# Start Frontend
Start-Process -FilePath "npm" -ArgumentList "run dev" -WorkingDirectory ".\client" -NoNewWindow: $false
