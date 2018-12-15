
export class ApiAdapter {
  static formattUsers(serverResponse: string) {
    const { results } = JSON.parse(serverResponse);
    const mapToUser = ({ id, location, name, phone, picture }) => ({
      id: id.value,
      location,
      name,
      phone,
      picture,
    });
    return results.map(mapToUser);
  }
}