tar cvf env.tar \
.env \
.env.production
travis encrypt-file env.tar