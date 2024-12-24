export function findInAgenda(
  agenda: string,
  phone: string
): { name: string; address: string } | null {
  const lines = agenda.split('\n');

  const nameRegex = /<([^>]+)>/;
  const phoneRegex = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/;

  const contact: ReturnType<typeof findInAgenda>[] = [];

  lines.forEach((line) => {
    const phoneMatch = line.match(phoneRegex);
    const phonee = phoneMatch ? phoneMatch[0] : '';

    if (!phonee.includes(phone)) {
      return;
    }

    const nameMatch = line.match(nameRegex);
    const name = nameMatch ? nameMatch[1] : '';

    let street = line.replace(nameMatch ? nameMatch[0] : '', '');
    street = street.replace(phoneMatch ? phoneMatch[0] : '', '').trim();

    contact.push({
      name,
      address: street,
    });
  });

  if (contact.length !== 1) return null;

  return contact[0];
}
