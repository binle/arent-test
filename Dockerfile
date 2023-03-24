# build stage
FROM node:16 as builder
ARG BACKEND_PREFIX_URL
RUN echo ${BACKEND_PREFIX_URL}
WORKDIR /app
COPY . .
RUN npm install
RUN REACT_APP_BACKEND_PREFIX_URL=${BACKEND_PREFIX_URL} npm run build


FROM nginx:latest
ENV NODE_ENV production
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]