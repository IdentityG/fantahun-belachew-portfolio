@echo off
setlocal
title Fantahun Belachew Portfolio
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Please install Node.js 22 or newer from https://nodejs.org/
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installing project dependencies...
  call npm install
  if errorlevel 1 (
    echo npm install failed. Check your internet connection and try again.
    pause
    exit /b 1
  )
)
echo.
echo Starting the portfolio... open http://localhost:3000
call npm run dev
pause
