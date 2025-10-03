@echo off
setlocal EnableDelayedExpansion

set "scanDir=."
set "output=service-worker.js"

(
echo const CACHE_NAME = 'v1';
echo const FILES_TO_CACHE = [
) > %output%

for /r "%scanDir%" %%F in (*) do (
    set "file=%%~dpnxF"
    set "file=!file:%cd%\=!"
    set "file=!file:\=/!"
    echo   "!file!" >> %output%
)

echo ]; >> %output%
echo. >> %output%

(
echo self.addEventListener('install', event => {
echo   event.waitUntil(
echo     caches.open(CACHE_NAME).then(cache => {
echo       return cache.addAll(FILES_TO_CACHE);
echo     })
echo   );
echo });
echo.
echo self.addEventListener('fetch', event => {
echo   event.respondWith(
echo     caches.match(event.request).then(response => {
echo       return response || fetch(event.request);
echo     })
echo   );
echo });
) >> %output%

echo Service worker generated as %output%
pause
