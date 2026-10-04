#!/usr/bin/env python3
"""Local static server: revalidate source files; cache fingerprinted audio safely."""
from argparse import ArgumentParser
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        if self.path.startswith('/audio/'):
            self.send_header('Cache-Control', 'public, max-age=31536000, immutable')
        else:
            self.send_header('Cache-Control', 'no-cache, must-revalidate')
        super().end_headers()

if __name__ == '__main__':
    parser = ArgumentParser(description='Deutsch Dicht · servidor local')
    parser.add_argument('--port', type=int, default=8765)
    args = parser.parse_args()
    directory = Path(__file__).resolve().parent.parent
    handler = partial(Handler, directory=str(directory))
    server = ThreadingHTTPServer(('127.0.0.1', args.port), handler)
    print(f'Deutsch Dicht · http://127.0.0.1:{args.port}/?v=2', flush=True)
    print('Detener: Ctrl+C. / Stop: Ctrl+C.', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
