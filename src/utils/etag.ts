import etag from "etag";

export function createETagGenerator(weak: boolean) {
  return function generateETag(
    body: string | Buffer,
    encoding?: BufferEncoding,
  ): string {
    return etag(Buffer.isBuffer(body) ? body : Buffer.from(body, encoding), {
      weak,
    });
  };
}
