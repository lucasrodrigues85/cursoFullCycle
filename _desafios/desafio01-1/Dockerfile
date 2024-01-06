# Builder
FROM golang:alpine3.19 as builder

WORKDIR /app

COPY . .

RUN go build -o app main.go

FROM scratch

COPY --from=builder /app .

ENTRYPOINT [ "/app" ]