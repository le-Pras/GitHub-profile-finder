class Github {
  constructor() {
    this.client_id = "a5bb453e7b472fc5c2dc";
    this.client_secret = "de9563964a193e69ec74404f2c8872abd3ff63e6";
    this.repos_sort = "created:asc";
    this.repos_count = 5;

  }

  async getUsers(user)  {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const repoData = await repoResponse.json();

    return {
      profile : profileData,
      repos : repoData
    };
}
}